function calculaPA(n,a1,r){
    let a=[]
    for (i=1;i<=n;i++)
        a.push(a1+(i-1)*r)
    console.log("PA =",a)
    console.log("SOMATORIO DA PA =",(a[0]+a[a.length-1])*n/2,"\n")
}

calculaPA(5,2,3)
calculaPA(100,1,1)

function calculaPG(n,a1,q){
    let a=[]
    let somapg=0
    for (i=1;i<=n;i++){
        a.push(a1*q**(i-1))
        somapg+=a[i-1]
    }
    console.log("PG =",a)
    console.log("SOMATORIO DA PG =",somapg,"\n")
}

calculaPG(5,2,3)
calculaPG(100,1,1)