import React from 'react'

/**
 * 
 * 
 * @param rules  a list of rules to check if true I.E {[toTestTrue1, toTestTrue2]}
 * @param ruleType "OR" defaults "AND"
 * @param exclude if true it reverses the results
 * @param arrayToCheck an array to check the rules against (TO IMPLEMENT)
 * @returns a div that is visible or not
 */

const VisDiv = ({children, className, onClick, style, rules=[], ruleType, exclude, arrayToCheck}) => {

    const ruleTypes = () => {
        
        switch (ruleType) {

            case "OR": {
                //console.log("OR")

                if(rules?.length > 0) {
                    //console.log("length > 0")
                    return rules.some((item)=>item)     
                }
                return true

            }                 
            default : {
                    //console.log("DEFAULT")

                    if(rules?.length > 0) {
                        //console.log("length > 0")
                        return rules.every((item)=>item)  
                    }
                    return true
                }   
        }  
    }

    const isExlude = () => {
        if(!exclude){
            return ruleTypes()
        }
        return !ruleTypes()
    }

    const testFunction = () => {
        //console.log( ruleTypes() )
    }

  return (
    <>
    {isExlude() && 
        <div className={className} style={style} onClick={onClick}>
            {/*<button onClick={testFunction}>test</button>*/}
            {children}
        </div>}
    </>
    
  )
}

export default VisDiv
