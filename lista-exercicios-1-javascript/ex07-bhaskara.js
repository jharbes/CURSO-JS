const bhaskara1=(a,b,c)=>{
    let delta=b*b-4*a*c
    if (delta<0)
        return 'Delta é negativo'
    else
        return [
            (-b+Math.sqrt(delta))/2*a.toFixed(2),
            (-b-Math.sqrt(delta))/2*a.toFixed(2)
        ]
}

const bhaskara=(a,b,c)=>{
    return b*b-4*a*c<0?'Delta é negativo':[
        (-b+Math.sqrt(b*b-4*a*c))/2*a.toFixed(2),
        (-b-Math.sqrt(b*b-4*a*c))/2*a.toFixed(2)
    ]
}

console.log(bhaskara(3,-4,1))
console.log(bhaskara(1,1,1))