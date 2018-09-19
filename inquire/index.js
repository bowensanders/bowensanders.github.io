async function getResults(query) {
  const res = await fetch(
    `https://cors-anywhere.herokuapp.com/https://feathers.beta.giveth.io/milestones/?$sort%5BupdatedAt%5D=-1&recipientAddress=${query}`
  )
    .then(result => {
      //console.log(result);
      return result.json();
    })
    .then(data => {
      console.log(`Below are the links to matching milestones for this address.`);
      console.log(`------------------------------------------------------------`);
      data.data.forEach(element => {
          let eth = (element.maxAmount / 1000000000000000000)
        console.log(
            `${eth} ETH https://beta.giveth.io/campaigns/${element.campaignId}/milestones/${element._id}`
          );
        
      });
      
    })
    .catch(error => {
      console.log(error);
    });
  //console.log(res);
}

//getResults("0xd00cc82a132f421bA6414D196BC830Db95e2e7Dd");
getResults(prompt("[beta.giveth.io] OPEN CONSOLE (CMD-OPT-J) Check What Recipient Address?"));
