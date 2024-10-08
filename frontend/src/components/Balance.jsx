export function Balance({balance}){
    return<>
        <div className="float-right text-sm md:text-xl">
            Available Balance : <span className="font-bold font-mono">{balance}</span>
        </div>
    </>
}