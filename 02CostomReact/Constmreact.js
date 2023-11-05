
function coustemRender(reactElment, container){
    /* const domElement= document.createElement(reactElment.type)
    domElement.innerHTML = reactElment.childer
    domElement.setAttribute('href',reactElment.props.href)
    domElement.setAttribute('target',reactElment.props.target)

    container.appendChild(domElement)*/

    const domElment=document.createElement(reactElment.type)
    domElment.innerHTML= reactElment.childern
    for (const prop in reactElment.props) {
      if(prop === 'childern') continue;
      domElment.setAttribute(prop, reactElment.props[prop])
    }
    container.appendChild(domElment)
}

const reactElment={
    type : 'a',
    props: {
        href:'https://google.com',
        formTarget: '_blank' 
    },
    childern : 'Click to visit'
}

const mainContainer=document.querySelector('#root')

coustemRender(reactElment, mainContainer)

