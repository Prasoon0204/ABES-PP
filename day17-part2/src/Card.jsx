import React, { useEffect, useState } from 'react'

const Card = ({name, email, githubLink}) => {
    const [data, setData] = useState({});
    const res = githubLink.split("/");
    const userId = res[3];

    const getData = async () => {
        const resp = await fetch(`api.github.com/users/${userId}`);
        const temp = await resp.json();
        setData(temp);
    }

    useEffect(() => {
        getData();
    },[]);

    console.log(data)

  return (
    <>
        <h1>{name}</h1>
        <h2>{email}</h2>
        <a target='_blanck' href={githubLink}>View Profile</a>
        <img width={125} src={data?.avatar_url} alt="profile photo" />
    </>
  )
}

export default Card