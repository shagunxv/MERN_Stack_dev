document.addEventListener("DOMContentLoaded", function () {

    const searchButton = document.getElementById("search-btn");
    const usernameInput = document.getElementById("user-input");
    const statsContainer = document.querySelector(".stats-container");

    const easyProgressCircle = document.querySelector(".easy_progress");
    const mediumProgressCircle = document.querySelector(".medium_progress");
    const hardProgressCircle = document.querySelector(".hard_progress");

    const easyLabel = document.getElementById("easy-label");
    const mediumLabel = document.getElementById("medium-label");
    const hardLabel = document.getElementById("hard-label");

    const cardsStatsContainer = document.querySelector(".stats-card");

    statsContainer.style.display='none';


    function validateUsername(username) {

        if (username.trim() === "") {
            alert("Username should not be empty!");
            return false;
        }

        const regex = /^[a-zA-Z0-9_-]{1,15}$/;
        const isMatching = regex.test(username);

        if (!isMatching) {
            alert("Invalid username!");
        }

        return isMatching;
    }


    async function fetchUserDetails(username) {

        try {

            searchButton.textContent = "Searching...";
            searchButton.disabled = true;
            


            // =========================
            // CORSPROXY CONFIGURATION
            // =========================

            const apiKey = "9e07deab";

            const targetUrl = "https://leetcode.com/graphql/";

            const proxyUrl =
                `https://corsproxy.io/?key=${apiKey}&url=${encodeURIComponent(targetUrl)}`;


            // =========================
            // HEADERS
            // =========================

            const myHeader = new Headers();

            myHeader.append(
                "Content-Type",
                "application/json"
            );

            //const resp = await fetch(proxyUrl,requestOptions);

            // =========================
            // GRAPHQL QUERY
            // =========================

            const graphql = JSON.stringify({

                query: `
                    query userSessionProgress($username: String!) {

                        allQuestionsCount {
                            difficulty
                            count
                        }

                        matchedUser(username: $username) {

                            submitStats {

                                acSubmissionNum {
                                    difficulty
                                    count
                                    submissions
                                }

                            }

                        }

                    }
                `,

                variables: {
                    username: username
                }

            });


            // =========================
            // REQUEST OPTIONS
            // =========================

            const requestOptions = {

                method: "POST",

                headers: myHeader,

                body: graphql

            };


            // =========================
            // FETCH DATA
            // =========================

            const resp = await fetch(proxyUrl, requestOptions);


            console.log("Response status:", resp.status);


            if (!resp.ok) {

                const errorText = await resp.text();

                console.error(
                    "API Error:",
                    errorText
                );

                throw new Error(
                    `HTTP Error: ${resp.status}`
                );

            }


            const parseddata = await resp.json();

            console.log(
                "Logging data:",
                parseddata
            );
            displayUserData(parseddata);
            statsContainer.style.display='block';

        }
        catch (error) {

            console.error(
                "Fetch Error:",
                error
            );

            statsContainer.innerHTML =
                "<p>No data found</p>";

        }
        finally {

            searchButton.textContent = "Search";

            searchButton.disabled = false;

        }

    }



    function updateProgress(solved,total,label,circle){
        
        const progressDegree = (solved/total)*100;
        circle.style.setProperty("--progress-degree",`${progressDegree}%`);
        label.textContent = `${solved}/${total}`;

    }

    function displayUserData(parseddata){

        const totalQues = parseddata.data.allQuestionsCount[0].count;
        const totalEasyQues = parseddata.data.allQuestionsCount[1].count;
        const totalMediumQues = parseddata.data.allQuestionsCount[2].count;
        const totalHardQues = parseddata.data.allQuestionsCount[3].count;

        const solvedTotal = parseddata.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedEasy = parseddata.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedMedium = parseddata.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedHard = parseddata.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedEasy, totalEasyQues, easyLabel, easyProgressCircle);
        updateProgress(solvedMedium, totalMediumQues, mediumLabel, mediumProgressCircle);
        updateProgress(solvedHard, totalHardQues, hardLabel, hardProgressCircle);

        const cardData = [
            {label: "Overall Submissions", value:parseddata.data.matchedUser.submitStats.acSubmissionNum[0].submissions },
            {label: "Overall EASY Submissions", value:parseddata.data.matchedUser.submitStats.acSubmissionNum[1].submissions },
            {label: "Overall MEDIUM Submissions", value:parseddata.data.matchedUser.submitStats.acSubmissionNum[2].submissions },
            {label: "Overall HARD Submissions", value:parseddata.data.matchedUser.submitStats.acSubmissionNum[3].submissions }
        ];

        console.log("Card Data: ",cardData);

        cardsStatsContainer.innerHTML = cardData.map(
    
            data =>
                `<div class="card">
                    <h4>${data.label}</h4>
                    <p>${data.value}</p>
                </div>`

        ).join("")
        
    }

    searchButton.addEventListener(
        "click",
        function () {

            const username =
                usernameInput.value.trim();

            console.log(
                "Logging username:",
                username
            );


            if (validateUsername(username)) {

                fetchUserDetails(username);

            }

        }
    );




});