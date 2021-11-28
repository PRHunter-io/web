import React from "react";
import styled from "styled-components";

const TechIconColored = styled.i`
  font-size: 65px;
`;

const TechIconSmall = styled.i`
  font-size: 35px;
`;


let deviconMap = new Map([
  ['javascript', 'devicon-javascript-plain'],
  ['html', 'devicon-html5-plain'],
  ['php', 'devicon-php-plain'],
  ['ruby', 'devicon-ruby-plain'],
  ['python', 'devicon-python-plain'],
  ['java', 'devicon-java-plain'],
  ['kotlin', 'devicon-kotlin-plain'],
  ['dotnet', 'devicon-dot-net-plain'],
  ['dotnetcore', 'devicon-dotnetcore-plain'],
  ['scala', 'devicon-scala-plain'],
  ['cpp', 'devicon-cplusplus-plain'],
  ['android', 'devicon-android-plain'],
  ['swift', 'devicon-swift-plain'],
  ['go', 'devicon-go-original-wordmark'],
]);

let fontawesomeMap = new Map([
  ['testing', 'fas fa-vial'],
  ['devops', 'fas fa-cogs'],
  ['admin', 'fas fa-tools'],
  ['uxui', 'fas fa-pencil-ruler'],
  ['security', 'fas fa-shield-alt'],
  ['data', 'fas fa-archive'],
  ['support', 'fas fa-hands-helping'],
  ['other', 'fas fa-code']
])

const getClassName = (devicon, faIcon) => {
  if (devicon != null) {
    return `${devicon} colored`
  }else if (faIcon != null) {
    return `${faIcon} colored`
  }else{
    return "devicon-atom-original colored"
  } 
}


const TechIcon = ({ language, small }) => {

  const devicon = deviconMap.get(language)
  const faIcon = fontawesomeMap.get(language)

  const className = getClassName(devicon, faIcon)

  if(small === true){
    return <TechIconSmall className={className}/>
  }else{
    return <TechIconColored className={className}/>
  }

};

export default TechIcon;
