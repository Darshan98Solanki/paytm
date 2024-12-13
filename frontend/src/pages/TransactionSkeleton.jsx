import Skeleton from 'react-loading-skeleton';

export default function TransactionSkeletion({ count }) {
    return Array(count).fill(0).map((_, i) => (
        <tr className="" key={i}>
            <td className="whitespace-nowrap px-4 md:px-2 py-4">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full`}>
                    <Skeleton className='animate-pulse' circle={true} height={48} width={48} />
                </div>
                <span className="ml-4 align-middle justify-center flex-auto">
                    <Skeleton className='animate-pulse mt-6' width={150} height={25} />
                </span>
            </td>
            <td>
                <div className="mr-2">
                    <Skeleton className='animate-pulse md:px-6 md:py-4 px-3 py-2 rounded-md' width="7rem" height="1.5rem" />
                </div>
            </td>
            <td>
                <div className="mr-2">
                    <Skeleton className='animate-pulse md:px-6 md:py-4 px-3 py-2 rounded-md' width="5rem" height="1.5rem" />
                </div>
            </td>
            <td>
                <div className="mr-2">
                    <Skeleton className='animate-pulse md:px-6 md:py-4 px-3 py-2 rounded-md' width="7rem" height="2.5rem" />
                </div>
            </td>
        </tr>
    ))
}