export default function getAuth(){
    return new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(
            {
            name:'Navjot Singh',
            uid:'navjot77',
            avatar:'http://www.newsshare.in/wp-content/uploads/2017/01/Navjot-Singh-Sidhu-5.jpg'
        }
        )

    },2000);
    })

}