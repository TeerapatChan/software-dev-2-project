import DentistCard from '@/components/DentistCard';

export default function DentistsForUser() {
  const demo = [
    { profilePic: '/img/cover.png', name: 'eiei', hospital: 'hos' },
    { profilePic: '/img/cover.png', name: 'eiei2', hospital: 'hos2' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
    { profilePic: '/img/cover.png', name: 'eiei3', hospital: 'hos3' },
  ];
  return (
    <div className='flex justify-center py-12'>
      <div className='grid grid-cols-3 gap-16'>
        {demo.map((dentist) => (
          <DentistCard
            profilePic={dentist.profilePic}
            name={dentist.name}
            hospital={dentist.hospital}
          />
        ))}
      </div>
    </div>
  );
}