/** @format */
import { apiKey } from "@/constant"
import type { Metadata} from 'next'

async function fetchVideo(id:string){
	let url = new URL(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${apiKey}`)

	url.searchParams.set('part', 'snippet')
	url.searchParams.set('type', 'video')

	try {
		const video = await fetch(url)
		return video.json()
	} catch (error) {
		console.error(error)
	}
}

export async function generateMetadata(
	{ params }: {params:{id:string}}
  ): Promise<Metadata> {
	// read route params
	const id = params.id
   
	// fetch data
	const video = await fetchVideo(id)
   
   
	return {
	  title: video.items[0].snippet.title
	}
  }


export default async function VideoDetail({ params }: { params: { id: string } }) {
	const videoSrc  = `https://www.youtube.com/embed/${params.id}`
	const video = await fetchVideo(params.id)
	return (
		<div className='px-8 grid grid-cols-10 gap-4'>
			<div className='col-span-7'>
				<div className='w-[100%]'>
					<iframe
						src={videoSrc}
						className='w-[100%] h-[35rem]'
					/>
				</div>
				<div className='flex flex-col gap-1'>
					<h2 className='font-bold text-lg'>{video.items[0].snippet.title}</h2>
					<h5 className='font-bold text-sm'>{video.items[0].snippet.channelTitle}</h5>
					<p className='text-slate-400 text-md'>{video.items[0].snippet.description}</p>
				</div>
			</div>
		</div>
	);
}
