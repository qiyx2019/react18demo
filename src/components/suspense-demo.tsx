import * as React from 'react'
import { fetchProfileData } from '@/api/fakeApi'
const resource = fetchProfileData()
const SuspenseDemo = () => {
  return (
    <React.Suspense fallback={'loading...'}>
      <ProfileDetails />
      <React.Suspense fallback={'loading...'}>
        <ProfileTimeline />
      </React.Suspense>
    </React.Suspense>
  )
}
const ProfileDetails = () => {
  const user = resource.user.read()
  return <h1>{user.name}</h1>
}
const ProfileTimeline = () => {
  const posts = resource.posts.read()
  return (
    <ul>
      {posts.map((post) => {
        return <li key={post.id}>{post.text}</li>
      })}
    </ul>
  )
}
export default SuspenseDemo
