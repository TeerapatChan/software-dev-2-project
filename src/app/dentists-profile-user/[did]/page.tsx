import ProfileCard from "@/components/ProfileCard";

export default function DentistProfileUser({params}:{params:{did:string}}){
    return (
      <div className='flex justify-center items-center h-[92vh] w-sereen'>
        <ProfileCard params={params}></ProfileCard>
      </div>
    );
}