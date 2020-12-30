console.log("ERC720")

let accounts = [];
let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
console.log("web3", web3)

if (typeof window.ethereum !== 'undefined') {
    console.log('MetaMask is installed!');
}

console.log("isMetaMask：" + ethereum.isMetaMask)



// SupplyChain.sol abi
var contractAbi = [
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "addDistributor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "addManufacturer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "addPatient",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "addPharmacist",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            }
        ],
        "name": "buyMedicine",
        "outputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "function"
    },
    {
        "inputs": [],
        "payable": true,
        "stateMutability": "payable",
        "type": "constructor"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "DistributorAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "DistributorRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "upc",
                "type": "uint256"
            }
        ],
        "name": "ForSale",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "kill",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "upc",
                "type": "uint256"
            }
        ],
        "name": "Made",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_originManufacturerID",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "_originFactoryName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_originFactoryInformation",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_originFactoryLatitude",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_originFactoryLongitude",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "_medicineNotes",
                "type": "string"
            }
        ],
        "name": "makeMedicine",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "ManufacturerAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "ManufacturerRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "upc",
                "type": "uint256"
            }
        ],
        "name": "Packed",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            }
        ],
        "name": "packMedicine",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "PatientAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "PatientRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "PharmacistAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "PharmacistRemoved",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "upc",
                "type": "uint256"
            }
        ],
        "name": "Purchased",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            }
        ],
        "name": "purchaseMedicine",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "upc",
                "type": "uint256"
            }
        ],
        "name": "Received",
        "type": "event"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            }
        ],
        "name": "receiveMedicine",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceDistributor",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renounceManufacturer",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renouncePatient",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [],
        "name": "renouncePharmacist",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "_price",
                "type": "uint256"
            }
        ],
        "name": "sellMedicine",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "constant": false,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            }
        ],
        "name": "shipMedicine",
        "outputs": [],
        "payable": false,
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "upc",
                "type": "uint256"
            }
        ],
        "name": "Shipped",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "upc",
                "type": "uint256"
            }
        ],
        "name": "Sold",
        "type": "event"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            }
        ],
        "name": "fetchMedicineBufferOne",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "medicineSKU",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "medicineUPC",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "ownerID",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "originManufacturerID",
                "type": "address"
            },
            {
                "internalType": "string",
                "name": "originFactoryName",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "originFactoryInformation",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "originFactoryLatitude",
                "type": "string"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            }
        ],
        "name": "fetchMedicineBufferThree",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "medicineSKU",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "medicineUPC",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "medicineID",
                "type": "uint256"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_upc",
                "type": "uint256"
            }
        ],
        "name": "fetchMedicineBufferTwo",
        "outputs": [
            {
                "internalType": "string",
                "name": "originFactoryLongitude",
                "type": "string"
            },
            {
                "internalType": "string",
                "name": "medicineNotes",
                "type": "string"
            },
            {
                "internalType": "uint256",
                "name": "medicinePrice",
                "type": "uint256"
            },
            {
                "internalType": "enum SupplyChain.State",
                "name": "medicineState",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "distributorID",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "pharmacistID",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "patientID",
                "type": "address"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isDistributor",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isManufacturer",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isPatient",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    },
    {
        "constant": true,
        "inputs": [
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "isPharmacist",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "payable": false,
        "stateMutability": "view",
        "type": "function"
    }
];

// 0x2b67db3e562528FEf2ba040f83f6D6421BBfb13E  本地
// rinkeby
var contract = new web3.eth.Contract(contractAbi, "0x9F2e32b2197DaEe28513250F662cF558A108A575");

console.log("contract MyDapp", contract)



$(".enableEthereumButton").click(function () {
    // alert("enableEthereumButton")
    // ethereum.request({ method: 'eth_requestAccounts' });
    getAccount()

}
)



async function getAccount() {
    accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    // showAccount.innerHTML = account;
    $(".showAccount").html(account);

}

// 添加制造商

$("#btn_ManufacturerAddr").click(function () {
    _ManufacturerAddr = $('#ManufacturerAddr' ).val();
    console.log("btn_ManufacturerAddr", _ManufacturerAddr);

    contract.methods.addManufacturer(_ManufacturerAddr).send({ from: accounts[0] }).then(
        function (result) {
            console.log("ManufacturerAddr==>", result);
            console.log("ManufacturerAddr transactionHash==>", result.transactionHash);
        }
    )

}
)


// 添加经销商

$("#btn_DistributorAddr").click(function () {
    _DistributorAddr = $('#DistributorAddr').val();
    console.log("_DistributorAddr", _DistributorAddr);

    contract.methods.addDistributor(_DistributorAddr).send({ from: accounts[0] }).then(
        function (result) {
            console.log("addDistributor==>", result);
            console.log("addDistributor transactionHash==>", result.transactionHash);
        }
    )

}
)





$("#btn-fetchOne").click(function () {
    _upc = $('#upc').val();
    console.log("btn-fetchOne", _upc);


    contract.methods.fetchMedicineBufferOne(_upc).call({ from: accounts[0] }).then(
        function (result) {
            console.log("fetchMedicineBufferOne***********", result)


        }
    );



}
)
