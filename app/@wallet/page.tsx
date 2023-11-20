
import { getExistToken } from "@/utils/token";
import { CountDown } from "@/app/@wallet/_component/countown";

const myWallet = async ()=>{
    const token = getExistToken()


    const wallet = await fetch(`${process.env.SERVER_APP}/api/wallet`, {
            method: "GET", headers: {
                "authorization": `Bearer ${token}`
            },
        });
      return await wallet.json();
}

export default async  function Wallet(){
    const wallet = await myWallet();
    return (
        <div className="flex flex-col items-center gap-2 h-full justify-center">
            <p>Coins: {wallet.coins}</p>
            <CountDown />
        </div>
    )
}
