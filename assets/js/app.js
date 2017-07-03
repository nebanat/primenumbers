class PrimeNumbers{
   is_prime(n){
        for(var i=2;i<=n/2;i++){
            if( n%i>0){
                return true
            }
            return false
        }
    }

   prime_numbers(n){
  
       var primes =[]

       for(let i=2;i<=n;i++){
          if(this.is_prime(i)){
             primes.push(i)
         }
      }

       return primes
     }    


}

const p = new PrimeNumbers()
console.log(p.prime_numbers(30))


