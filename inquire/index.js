//
// Simple query ETH address for milestones (bowensanders 9.19.18)
//
// URL to view data: https://feathers.beta.giveth.io/milestones/?$sort%5BupdatedAt%5D=-1&recipientAddress=0x...
async function getResults(query) {
  try {
    // get the data from feathers
    const res = await fetch(
      `https://cors-anywhere.herokuapp.com/https://feathers.beta.giveth.io/milestones/?$sort%5BupdatedAt%5D=-1&recipientAddress=${query}`);
    // convert results to json  
    const data = await res.json();
    // uncomment next console log for object display
    // console.log(data);
    console.log(`Below are the links to matching milestones for this address.`);
    console.log(`------------------------------------------------------------`);
    // format ETH values to 2 digits or 1 digit with space before decimal, 8 decimal places long
    // then print each line to console
    data.data.forEach(element => {
      let eth = (element.maxAmount / 1000000000000000000)
      let eth2 = "";
      if (eth < 10) { 
        eth2 = ` ${eth.toFixed(8)}`;
      } else {
        eth2 = eth.toFixed(8);
      };
      console.log(
        `${eth2} ETH | https://beta.giveth.io/campaigns/${element.campaignId}/milestones/${element._id} | ${element.status}`);
    })
  } catch(error) {
    console.log(error);
  }
}

getResults(prompt("[beta.giveth.io] OPEN CONSOLE (CMD-OPT-J) Check What Recipient Address?"));