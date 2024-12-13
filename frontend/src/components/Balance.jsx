import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
export function Balance({balance}){
    return<>
        <div className="float-right text-sm md:text-xl">
            {balance === undefined ? <Skeleton className='animate-pulse' inline={true} width={250} height={25} /> : <>Available Balance : <span className="font-bold font-mono">$ {balance}</span></>}
        </div>
    </>
}