const qarHav=function(a, b,c) 
{
		const diskriminat=Math.pow(b,2)-4*a*c;
		if(diskriminat<0)
		{
			return "Lucum chuni";
		}
			else{
					const x1=(-1*b-Math.sqrt(diskriminat))/2*a;
					const x2=(-1*b+Math.sqrt(diskriminat))/2*a;
					if(x1>x2)
					{
						return x1;
					}
						else
						{
							return x2;
						}				
				}
		
};
const nothing=function(){
	return "Sargis Petrosyan";
};
const add=function(num1,num2){
	if(num1>num2){
		const result=num1-num2;
		console.log(result);
	}
	else{
		const result=num2-num1;
		console.log(result);
	}
};
const fullName= function(firstname,lastname){
	return firstname+' '+lastname;
};
const longeststr=function(str1,str2,str3){
	const len1=str1.lenght;
	const len2=str2.lenght;
	const len3=str3.lenght;
	if(len1>len2)
	{
		if(len1>len3){
			return str1;
		}
			else
			{
				return str3;
			}
	}
	else if(len2>len3)
		{
			return str2;
		}		
			else
			{
				return str3;
			}
	
	
};
const smth=function(num1,num2){
		if(num1===num2)
		{
			return 0;
		}
			else if(num1>num2){
				return 1;
			}			
					else
					{
						return -1;
					}
			
};
const isThruthy=function(a,b,c){
	if(a){return a;}
	else if(b){return b;} else if(c){return c;}
};






































