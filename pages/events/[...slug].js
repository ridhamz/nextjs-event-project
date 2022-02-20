import { useRouter } from 'next/router';
import React from 'react';

export default function FilteredEventsPage() {
    const router = useRouter()
    const [year, month ] = router.query.slug
     
    if(!year || !month) return <p>Loading...</p>
    const events =  12
    
  return <div>FilteredEventsPage</div>;
}
