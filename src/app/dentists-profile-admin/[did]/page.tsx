import EditProfileCard from "@/components/EditProfileCard";


export default function DentistProfileAdmin({params}:{params:{did:string}}) {
    
    return (
      <div className='flex justify-center items-center h-[92vh] w-sereen'>
        <EditProfileCard params={params} />
      </div>
    );
}