import Image from 'next/image';

const ImageBox = () => {
  return (
    <div className="flex justify-center items-center p-5 md:p-10">
      <div className="flex flex-col md:flex-row border border-gray-300 rounded-lg shadow-lg overflow-hidden w-full max-w-3xl">
        <div className="flex flex-col space-y-4 p-4 w-full md:w-1/2">
          <Image src="/images/nexts.png" alt="Image 1" width={150} height={150} className="object-contain" />
          <Image src="/images/nodes.jpeg" alt="Image 2" width={100} height={100} className="object-contain" />
        </div>
        <div className="border-l-2 border-gray-300 h-full hidden md:block"></div>
        <div className="flex flex-col space-y-4 p-4 w-full md:w-1/2">
          <Image src="/images/js.png" alt="Image 3" width={150} height={150} className="object-contain" />
          <Image src="/images/téléchargement.png" alt="Image 4" width={150} height={150} className="object-contain" />
        </div>
      </div>
    </div>
  );
};

export default ImageBox;
