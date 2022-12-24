import React from 'react'
import { Avatar, List, Skeleton } from 'antd';
import { gql, useQuery } from '@apollo/client';

const GET_POSTS = gql`
  query GetAllPosts {
    id
    title
    description
    user{
        profile_photo
    }
  }
`;

const list = [{ "gender": "male", "name": { "title": "Mr", "first": "Sebastian", "last": "Garcia" }, "email": "sebastian.garcia@example.com", "picture": { "large": "https://randomuser.me/api/portraits/men/99.jpg", "medium": "https://randomuser.me/api/portraits/med/men/99.jpg", "thumbnail": "https://randomuser.me/api/portraits/thumb/men/99.jpg" }, "nat": "AU" }]

export default function Home() {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Error :{Error.message}</div>;

    console.log(data);

    return (
        <div>
            <List
                className="demo-loadmore-list"
                loading={false}
                itemLayout="horizontal"
                // loadMore={loadMore}
                dataSource={list}
                renderItem={(item) => (
                    <List.Item>
                        <Skeleton avatar title={false} loading={item.loading} active>
                            <List.Item.Meta
                                avatar={<Avatar src={item.picture.large} />}
                                title={<a href="https://ant.design">{item.name?.last}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </Skeleton>
                    </List.Item>
                )}
            />
        </div>
    )
}
