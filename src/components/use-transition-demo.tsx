import * as React from 'react'
import { fetchProfileData } from '@/api/fakeApi1'
const initResource = fetchProfileData(0)
const getNextUserId = (id) => {
  return id === 3 ? 0 : id + 1;
}
const UseTransitionDemo = () => {
  const [resource,setResource] = React.useState(initResource);
  const [isPending,startTransition] = React.useTransition({
    timeout:2000
  });
  return <>
  <button disabled={isPending} onClick={()=>startTransition(
    ()=> {
      const nextUserId = getNextUserId(resource.userId);
      setResource(fetchProfileData(nextUserId))
    }
  )}>Next</button>
  {isPending&&<h1>update page...</h1>}
  {!isPending&&<ProfilePage resource={resource} />  }
  </>
}

function ProfilePage({ resource }) {
  return (
    <React.Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails resource={resource} />
      <React.Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline resource={resource} />
      </React.Suspense>
    </React.Suspense>
  );
}

function ProfileDetails({ resource }) {
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline({ resource }) {
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
export default UseTransitionDemo;