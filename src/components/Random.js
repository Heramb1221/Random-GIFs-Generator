import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const {gif, loading, fetchData} = useGif();

  return (
    <div className='w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]'>
        <h1 className='mt-[15px] text-2xl underline uppercase font-bold'>A Random GIF</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }
        <button onClick={() => fetchData()} className='mb-[20px] w-10/12 bg-yellow-500 text-lg py-2 rounded-lg'>Generate</button>
    </div>
  )
}

export default Random;