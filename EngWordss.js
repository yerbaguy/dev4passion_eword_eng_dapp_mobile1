import React, { useState, useEffect } from "react";
import { View, Text } from 'react-native';

import  EWordContractt  from './utils/EWordEngContract.json';

//import { FlatList } from 'react-native-gesture-handler';

const ewordEngContract = "0x76d9c26896A069f481efCDe2d3E0C706dAC2A9BB"

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
var Contract = require('web3-eth-contract');


const EngWordss = () => {


    const [engwords, setEngwords] = useState([]);

    useEffect(() => {

        Contract.setProvider('wss://eth-goerli.g.alchemy.com/v2/1NkuHJk9fySa1xwgPZ21rwqkGJbh_9Cm');
    const contractt = new Contract(EWordContractt.abi, ewordEngContract);         
    console.log("engwordss_contract", contractt.getEWords());

        console.log("EngWordss----");
      //  getewordss();

    }, [])

    const getewordss = async() => {

        // wordid = 0;
 
         return (
 
             // contractt.methods.getEWords(wordid).call((error, result) => {
                 contractt.methods.getEWords().call((error, result) => {    
 
                 let engword_explained = "";
                 // console.log("ewords_result--", result[0]);
                 // console.log("ewords_result--", result[0]);
                 console.log("ewords_result--", result[0]);
                 // setEngword_array([...engword_array, result]);
                
             //  setEngword_array(result);
                 setEngwords(result)
                 //  console.log("engword_array--", engword_array);
                 console.log("engwords--", engwords);
     
                //// setEngword_Explained(result);
                //// console.log("engword_explained--", engword_explained);
                
                
                 // engword_explained = result[0];
                
                ///// engword_explained = result;
                
                 // setEngword_Explained(result[0]);
                 // setEngword_Explained(engword_explained);
                 //setEngword_Explained(result);
                
                ///// console.log("engwordexplained_result", engword_explained);
     
             })
         )
     }

    return (

        <View>
            <Text>EngWordss</Text>
        </View>
    )
}

export default EngWordss;