document.addEventListener('DOMContentLoaded', () => {

    const questionTextElement = document.getElementById('question-text');
    const promptAreaElement = document.getElementById('prompt-area');
    const flagImageElement = document.getElementById('flag-image');
    const promptTextElement = document.getElementById('prompt-text'); 
    const optionsContainerElement = document.getElementById('options-container');
    const feedbackContainerElement = document.getElementById('feedback-container');
    const feedbackTextElement = document.getElementById('feedback-text');
    const correctAnswerDisplayElement = document.getElementById('correct-answer-display');
    const correctFlagElement = document.getElementById('correct-flag');
    const correctDetailsElement = document.getElementById('correct-details');

    
    const countriesData = [
        { name: "Afghanistan", capital: "Kabul", code: "af" },
        { name: "Albania", capital: "Tirana", code: "al" },
        { name: "Algeria", capital: "Algiers", code: "dz" },
        { name: "Andorra", capital: "Andorra la Vella", code: "ad" },
        { name: "Angola", capital: "Luanda", code: "ao" },
        { name: "Antigua and Barbuda", capital: "St. John's", code: "ag" },
        { name: "Argentina", capital: "Buenos Aires", code: "ar" },
        { name: "Armenia", capital: "Yerevan", code: "am" },
        { name: "Australia", capital: "Canberra", code: "au" },
        { name: "Austria", capital: "Vienna", code: "at" },
        { name: "Azerbaijan", capital: "Baku", code: "az" },
        { name: "Bahamas", capital: "Nassau", code: "bs" },
        { name: "Bahrain", capital: "Manama", code: "bh" },
        { name: "Bangladesh", capital: "Dhaka", code: "bd" },
        { name: "Barbados", capital: "Bridgetown", code: "bb" },
        { name: "Belarus", capital: "Minsk", code: "by" },
        { name: "Belgium", capital: "Brussels", code: "be" },
        { name: "Belize", capital: "Belmopan", code: "bz" },
        { name: "Benin", capital: "Porto-Novo", code: "bj" },
        { name: "Bhutan", capital: "Thimphu", code: "bt" },
        { name: "Bolivia", capital: "Sucre (constitutional), La Paz (administrative)", code: "bo" },
        { name: "Bosnia and Herzegovina", capital: "Sarajevo", code: "ba" },
        { name: "Botswana", capital: "Gaborone", code: "bw" },
        { name: "Brazil", capital: "Brasília", code: "br" },
        { name: "Brunei", capital: "Bandar Seri Begawan", code: "bn" },
        { name: "Bulgaria", capital: "Sofia", code: "bg" },
        { name: "Burkina Faso", capital: "Ouagadougou", code: "bf" },
        { name: "Burundi", capital: "Gitega", code: "bi" },
        { name: "Cabo Verde", capital: "Praia", code: "cv" },
        { name: "Cambodia", capital: "Phnom Penh", code: "kh" },
        { name: "Cameroon", capital: "Yaoundé", code: "cm" },
        { name: "Canada", capital: "Ottawa", code: "ca" },
        { name: "Central African Republic", capital: "Bangui", code: "cf" },
        { name: "Chad", capital: "N'Djamena", code: "td" },
        { name: "Chile", capital: "Santiago", code: "cl" },
        { name: "China", capital: "Beijing", code: "cn" },
        { name: "Colombia", capital: "Bogotá", code: "co" },
        { name: "Comoros", capital: "Moroni", code: "km" },
        { name: "Congo, Democratic Republic of the", capital: "Kinshasa", code: "cd" },
        { name: "Congo, Republic of the", capital: "Brazzaville", code: "cg" },
        { name: "Costa Rica", capital: "San José", code: "cr" },
        { name: "Côte d'Ivoire", capital: "Yamoussoukro (official), Abidjan (de facto)", code: "ci" },
        { name: "Croatia", capital: "Zagreb", code: "hr" },
        { name: "Cuba", capital: "Havana", code: "cu" },
        { name: "Cyprus", capital: "Nicosia", code: "cy" },
        { name: "Czechia", capital: "Prague", code: "cz" },
        { name: "Denmark", capital: "Copenhagen", code: "dk" },
        { name: "Djibouti", capital: "Djibouti City", code: "dj" },
        { name: "Dominica", capital: "Roseau", code: "dm" },
        { name: "Dominican Republic", capital: "Santo Domingo", code: "do" },
        { name: "Ecuador", capital: "Quito", code: "ec" },
        { name: "Egypt", capital: "Cairo", code: "eg" },
        { name: "El Salvador", capital: "San Salvador", code: "sv" },
        { name: "Equatorial Guinea", capital: "Malabo", code: "gq" },
        { name: "Eritrea", capital: "Asmara", code: "er" },
        { name: "Estonia", capital: "Tallinn", code: "ee" },
        { name: "Eswatini", capital: "Mbabane", code: "sz" },
        { name: "Ethiopia", capital: "Addis Ababa", code: "et" },
        { name: "Fiji", capital: "Suva", code: "fj" },
        { name: "Finland", capital: "Helsinki", code: "fi" },
        { name: "France", capital: "Paris", code: "fr" },
        { name: "Gabon", capital: "Libreville", code: "ga" },
        { name: "Gambia", capital: "Banjul", code: "gm" },
        { name: "Georgia", capital: "Tbilisi", code: "ge" },
        { name: "Germany", capital: "Berlin", code: "de" },
        { name: "Ghana", capital: "Accra", code: "gh" },
        { name: "Greece", capital: "Athens", code: "gr" },
        { name: "Grenada", capital: "St. George's", code: "gd" },
        { name: "Guatemala", capital: "Guatemala City", code: "gt" },
        { name: "Guinea", capital: "Conakry", code: "gn" },
        { name: "Guinea-Bissau", capital: "Bissau", code: "gw" },
        { name: "Guyana", capital: "Georgetown", code: "gy" },
        { name: "Haiti", capital: "Port-au-Prince", code: "ht" },
        { name: "Honduras", capital: "Tegucigalpa", code: "hn" },
        { name: "Hungary", capital: "Budapest", code: "hu" },
        { name: "Iceland", capital: "Reykjavík", code: "is" },
        { name: "India", capital: "New Delhi", code: "in" },
        { name: "Indonesia", capital: "Jakarta", code: "id" },
        { name: "Iran", capital: "Tehran", code: "ir" },
        { name: "Iraq", capital: "Baghdad", code: "iq" },
        { name: "Ireland", capital: "Dublin", code: "ie" },
        { name: "Israel", capital: "Jerusalem", code: "il" },
        { name: "Italy", capital: "Rome", code: "it" },
        { name: "Jamaica", capital: "Kingston", code: "jm" },
        { name: "Japan", capital: "Tokyo", code: "jp" },
        { name: "Jordan", capital: "Amman", code: "jo" },
        { name: "Kazakhstan", capital: "Astana", code: "kz" },
        { name: "Kenya", capital: "Nairobi", code: "ke" },
        { name: "Kiribati", capital: "South Tarawa", code: "ki" },
        { name: "Korea, North", capital: "Pyongyang", code: "kp" },
        { name: "Korea, South", capital: "Seoul", code: "kr" },
        { name: "Kuwait", capital: "Kuwait City", code: "kw" },
        { name: "Kyrgyzstan", capital: "Bishkek", code: "kg" },
        { name: "Laos", capital: "Vientiane", code: "la" },
        { name: "Latvia", capital: "Riga", code: "lv" },
        { name: "Lebanon", capital: "Beirut", code: "lb" },
        { name: "Lesotho", capital: "Maseru", code: "ls" },
        { name: "Liberia", capital: "Monrovia", code: "lr" },
        { name: "Libya", capital: "Tripoli", code: "ly" },
        { name: "Liechtenstein", capital: "Vaduz", code: "li" },
        { name: "Lithuania", capital: "Vilnius", code: "lt" },
        { name: "Luxembourg", capital: "Luxembourg City", code: "lu" },
        { name: "Madagascar", capital: "Antananarivo", code: "mg" },
        { name: "Malawi", capital: "Lilongwe", code: "mw" },
        { name: "Malaysia", capital: "Kuala Lumpur", code: "my" },
        { name: "Maldives", capital: "Malé", code: "mv" },
        { name: "Mali", capital: "Bamako", code: "ml" },
        { name: "Malta", capital: "Valletta", code: "mt" },
        { name: "Marshall Islands", capital: "Majuro", code: "mh" },
        { name: "Mauritania", capital: "Nouakchott", code: "mr" },
        { name: "Mauritius", capital: "Port Louis", code: "mu" },
        { name: "Mexico", capital: "Mexico City", code: "mx" },
        { name: "Micronesia, Federated States of", capital: "Palikir", code: "fm" },
        { name: "Moldova", capital: "Chișinău", code: "md" },
        { name: "Monaco", capital: "Monaco", code: "mc" },
        { name: "Mongolia", capital: "Ulaanbaatar", code: "mn" },
        { name: "Montenegro", capital: "Podgorica", code: "me" },
        { name: "Morocco", capital: "Rabat", code: "ma" },
        { name: "Mozambique", capital: "Maputo", code: "mz" },
        { name: "Myanmar", capital: "Naypyidaw", code: "mm" },
        { name: "Namibia", capital: "Windhoek", code: "na" },
        { name: "Nauru", capital: "Yaren (de facto)", code: "nr" },
        { name: "Nepal", capital: "Kathmandu", code: "np" },
        { name: "Netherlands", capital: "Amsterdam (official), The Hague (seat of government)", code: "nl" },
        { name: "New Zealand", capital: "Wellington", code: "nz" },
        { name: "Nicaragua", capital: "Managua", code: "ni" },
        { name: "Niger", capital: "Niamey", code: "ne" },
        { name: "Nigeria", capital: "Abuja", code: "ng" },
        { name: "North Macedonia", capital: "Skopje", code: "mk" },
        { name: "Norway", capital: "Oslo", code: "no" },
        { name: "Oman", capital: "Muscat", code: "om" },
        { name: "Pakistan", capital: "Islamabad", code: "pk" },
        { name: "Palau", capital: "Ngerulmud", code: "pw" },
        { name: "Panama", capital: "Panama City", code: "pa" },
        { name: "Papua New Guinea", capital: "Port Moresby", code: "pg" },
        { name: "Paraguay", capital: "Asunción", code: "py" },
        { name: "Peru", capital: "Lima", code: "pe" },
        { name: "Philippines", capital: "Manila", code: "ph" },
        { name: "Poland", capital: "Warsaw", code: "pl" },
        { name: "Portugal", capital: "Lisbon", code: "pt" },
        { name: "Qatar", capital: "Doha", code: "qa" },
        { name: "Romania", capital: "Bucharest", code: "ro" },
        { name: "Russia", capital: "Moscow", code: "ru" },
        { name: "Rwanda", capital: "Kigali", code: "rw" },
        { name: "Saint Kitts and Nevis", capital: "Basseterre", code: "kn" },
        { name: "Saint Lucia", capital: "Castries", code: "lc" },
        { name: "Saint Vincent and the Grenadines", capital: "Kingstown", code: "vc" },
        { name: "Samoa", capital: "Apia", code: "ws" },
        { name: "San Marino", capital: "City of San Marino", code: "sm" },
        { name: "Sao Tome and Principe", capital: "São Tomé", code: "st" },
        { name: "Saudi Arabia", capital: "Riyadh", code: "sa" },
        { name: "Senegal", capital: "Dakar", code: "sn" },
        { name: "Serbia", capital: "Belgrade", code: "rs" },
        { name: "Seychelles", capital: "Victoria", code: "sc" },
        { name: "Sierra Leone", capital: "Freetown", code: "sl" },
        { name: "Singapore", capital: "Singapore", code: "sg" },
        { name: "Slovakia", capital: "Bratislava", code: "sk" },
        { name: "Slovenia", capital: "Ljubljana", code: "si" },
        { name: "Solomon Islands", capital: "Honiara", code: "sb" },
        { name: "Somalia", capital: "Mogadishu", code: "so" },
        { name: "South Africa", capital: "Pretoria (executive), Cape Town (legislative), Bloemfontein (judicial)", code: "za" },
        { name: "South Sudan", capital: "Juba", code: "ss" },
        { name: "Spain", capital: "Madrid", code: "es" },
        { name: "Sri Lanka", capital: "Sri Jayawardenepura Kotte", code: "lk" },
        { name: "Sudan", capital: "Khartoum", code: "sd" },
        { name: "Suriname", capital: "Paramaribo", code: "sr" },
        { name: "Sweden", capital: "Stockholm", code: "se" },
        { name: "Switzerland", capital: "Bern", code: "ch" },
        { name: "Syria", capital: "Damascus", code: "sy" },
        { name: "Taiwan", capital: "Taipei", code: "tw" },
        { name: "Tajikistan", capital: "Dushanbe", code: "tj" },
        { name: "Tanzania", capital: "Dodoma", code: "tz" },
        { name: "Thailand", capital: "Bangkok", code: "th" },
        { name: "Timor-Leste", capital: "Dili", code: "tl" },
        { name: "Togo", capital: "Lomé", code: "tg" },
        { name: "Tonga", capital: "Nukuʻalofa", code: "to" },
        { name: "Trinidad and Tobago", capital: "Port of Spain", code: "tt" },
        { name: "Tunisia", capital: "Tunis", code: "tn" },
        { name: "Turkey", capital: "Ankara", code: "tr" },
        { name: "Turkmenistan", capital: "Ashgabat", code: "tm" },
        { name: "Tuvalu", capital: "Funafuti", code: "tv" },
        { name: "Uganda", capital: "Kampala", code: "ug" },
        { name: "Ukraine", capital: "Kyiv", code: "ua" },
        { name: "United Arab Emirates", capital: "Abu Dhabi", code: "ae" },
        { name: "United Kingdom", capital: "London", code: "gb" },
        { name: "United States", capital: "Washington, D.C.", code: "us" },
        { name: "Uruguay", capital: "Montevideo", code: "uy" },
        { name: "Uzbekistan", capital: "Tashkent", code: "uz" },
        { name: "Vanuatu", capital: "Port Vila", code: "vu" },
        { name: "Venezuela", capital: "Caracas", code: "ve" },
        { name: "Vietnam", capital: "Hanoi", code: "vn" },
        { name: "Yemen", capital: "Sana'a", code: "ye" },
        { name: "Zambia", capital: "Lusaka", code: "zm" },
        { name: "Zimbabwe", capital: "Harare", code: "zw" },
    
      ];
    let currentCorrectAnswer = null;
    let quizActive = true;
    let autoAdvanceTimeout = null;



    function getRandomEntry(excludeEntry = null) {
        let entry;
        do {
            const randomIndex = Math.floor(Math.random() * countriesData.length);
            entry = countriesData[randomIndex];
        } while (excludeEntry && entry.code === excludeEntry.code);
        return entry;
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateQuestion() {
        if (autoAdvanceTimeout) {
            clearTimeout(autoAdvanceTimeout);
            autoAdvanceTimeout = null;
        }

        quizActive = true;
        feedbackContainerElement.classList.remove('visible');
        feedbackTextElement.textContent = '';
        correctAnswerDisplayElement.style.display = 'none';
        optionsContainerElement.innerHTML = '';

        const questionTypes = [
            'flagToCountry', 'flagToCapital', 'countryToCapital', 'capitalToCountry'
        ];
        const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
        const correctEntry = getRandomEntry();
        currentCorrectAnswer = correctEntry;

        let question = "";
        let answerProperty = ""; 
        let options = [correctEntry];

        answerProperty = (randomType === 'flagToCountry' || randomType === 'capitalToCountry') ? 'name' : 'capital';

        while (options.length < 4) {
            const distractorEntry = getRandomEntry(correctEntry);
            if (!options.some(opt => opt[answerProperty] === distractorEntry[answerProperty])) {
                options.push(distractorEntry);
            }
        }

        flagImageElement.src = `images/flags/${correctEntry.code}.png`;
        flagImageElement.alt = `Flag of ${correctEntry.name}`;
        flagImageElement.style.display = 'block'; 
        promptTextElement.style.display = 'none';  

        switch (randomType) {
            case 'flagToCountry':
                question = "Which country does this flag belong to?";
                
                break;

            case 'flagToCapital':
                question = "What is the capital of the country with this flag?";
                
                break;

            case 'countryToCapital':
                question = `What is the capital of ${correctEntry.name}?`;
                
                break;

            case 'capitalToCountry':
                question = `${correctEntry.capital} is the capital of which country?`;
                
                break;
        }

        questionTextElement.textContent = question;

        
        shuffleArray(options);

        options.forEach(optionData => {
            const button = document.createElement('button');
            button.classList.add('option-button');
            button.dataset.code = optionData.code; 

            
            button.textContent = optionData[answerProperty]; 

            button.addEventListener('click', handleAnswer);
            optionsContainerElement.appendChild(button);
        });
    }

    function handleAnswer(event) {
        if (!quizActive) return;
        quizActive = false;

        if (autoAdvanceTimeout) {
            clearTimeout(autoAdvanceTimeout);
            autoAdvanceTimeout = null;
        }

        const selectedButton = event.currentTarget;
        const selectedCode = selectedButton.dataset.code;
        const isCorrect = selectedCode === currentCorrectAnswer.code;

        displayFeedback(isCorrect, selectedButton);
    }

    function displayFeedback(isCorrect, selectedButton) {
        feedbackContainerElement.classList.add('visible');
        correctAnswerDisplayElement.style.display = 'flex';

        correctFlagElement.src = `images/flags/${currentCorrectAnswer.code}.png`;
        correctFlagElement.alt = `Flag of ${currentCorrectAnswer.name}`;
        correctDetailsElement.textContent = `${currentCorrectAnswer.name} - ${currentCorrectAnswer.capital}`;

        const buttons = optionsContainerElement.querySelectorAll('.option-button');
        buttons.forEach(button => {
            button.disabled = true;
            const buttonCode = button.dataset.code;

            if (buttonCode === currentCorrectAnswer.code) {
                button.classList.add('reveal-correct');
            }

            if (button === selectedButton) {
                button.classList.add(isCorrect ? 'correct' : 'incorrect');
            } else {
                if (buttonCode !== currentCorrectAnswer.code) {
                    button.style.opacity = '0.6';
                }
            }
        });

        if (isCorrect) {
            feedbackTextElement.textContent = "Correct!";
            feedbackTextElement.className = 'correct';

            autoAdvanceTimeout = setTimeout(() => {
                generateQuestion();
                autoAdvanceTimeout = null;
            }, 2000);

        } else {
            feedbackTextElement.textContent = "Incorrect!";
            feedbackTextElement.className = 'incorrect';
        }
    }

    
    generateQuestion();

}); 
