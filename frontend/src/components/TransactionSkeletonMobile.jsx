import Skeleton from 'react-loading-skeleton';
export default function TransactionSkeletonMobile({ count }) {
    return (
        Array(count).fill(0).map((_, i) => (
            <div className="sm:hidden" key={i}>
                <div className="mb-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <p className="text-sm font-medium text-gray-700">
                        <Skeleton className='animate-pulse' height="1.5rem" width="10rem" />
                    </p>
                    <p className="text-sm text-gray-700">
                        <Skeleton className='animate-pulse' height="1.5rem" width="8rem" />
                    </p>
                    <p className="text-sm text-gray-700">
                        <Skeleton className='animate-pulse' height="1.5rem" width="6rem" />
                    </p>
                    <div className="mt-2">
                        <Skeleton className='animate-pulse' height="2rem" width="6rem" />
                    </div>
                </div>
            </div>
        ))
    )
}