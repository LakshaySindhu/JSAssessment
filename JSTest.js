/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

const my_NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT ( _name , _eyeColor , _shirtType , _bling) {
    const NFT_Obj = {
        "name" : _name,
        "eyeColor" : _eyeColor,
        "shirtType" : _shirtType,
        "bling": _bling 
    };

    my_NFTs.push(NFT_Obj); 
    console.log("Minted : " +_name + " Sucessfully..." );
 
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for(let i = 0 ; i<my_NFTs.length ; i++){
        console.log("\nId : " + (i+1));
        console.log("Name : "+my_NFTs[i].name);
        console.log("Eye Color : "+my_NFTs[i].eyeColor);
        console.log("Shirt Type : "+my_NFTs[i].shirtType);
        console.log("Bling : "+my_NFTs[i].bling);
    }

}
// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\n"+my_NFTs.length);

}

// call your functions below this line

mintNFT("Ray","Green","Sweatshirt","Rollex Watch");
mintNFT("Kai","Blue","Hoodie","Blue Pendant");
mintNFT("Rexx","Brown","Casual Shiet","Silver Chain");
mintNFT("Max","Black","TShirt","Apple Watch");
listNFTs();
getTotalSupply();
