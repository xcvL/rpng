function getRandomPhoneNumber() {
    let arr=[];
    
    for(let i=0; i<8; i++) {
        arr.push(String(Math.floor(Math.random()*10)));
    }

    return arr;
}

let phoneNumber = getRandomPhoneNumber();
let finalPhoneNumber = "010-" + phoneNumber[0] + phoneNumber[1] + phoneNumber[2] + phoneNumber[3] + "-" + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + phoneNumber[7];
document.getElementById("text").innerText = finalPhoneNumber;

document.getElementById("generator").addEventListener("click", () => {
    let phoneNumber = getRandomPhoneNumber();
    let finalPhoneNumber = "010-" + phoneNumber[0] + phoneNumber[1] + phoneNumber[2] + phoneNumber[3] + "-" + phoneNumber[4] + phoneNumber[5] + phoneNumber[6] + phoneNumber[7];
    document.getElementById("text").innerText = finalPhoneNumber;
})