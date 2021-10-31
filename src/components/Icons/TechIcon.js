import React from "react";
import styled from "styled-components";

const TechIconColored = styled.i`
  font-size: 65px;
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
  ['dotnetcore', 'devicon-dot-net-core-plain'],
  ['scala', 'devicon-scala-plain'],
  ['cpp', 'devicon-cplusplus-plain'],
  ['android', 'devicon-android-plain'],
  ['swift', 'devicon-swift-plain'],
  ['go', 'devicon-go-original-wordmark'],
]);

let fontawesomeMap = new Map([
  ['testing', 'fas fa-vial'],
  ['devops', 'subscriber'],
  ['admin', 'subscriber'],
  ['uxui', 'subscriber'],
  ['security', 'subscriber'],
  ['data', 'subscriber'],
  ['support', 'subscriber'],
  ['other', 'subscriber']
])



const TechIcon = ({ language }) => {

  const devicon = deviconMap.get(language)
  const faIcon = fontawesomeMap.get(language)

  if (devicon != null) {
    return <TechIconColored
      className={`${devicon} colored`}
    />
  }else if (faIcon != null) {
    return <TechIconColored
      className={`${faIcon}`}
    />
  }else{
    return <TechIcon className={`devicon-atom-original colored`} />
  } 
};

export default TechIcon;
