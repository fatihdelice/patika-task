import axios from "axios";

const getData = async (Number) => {
    const { data: user } = await axios(
        `https://jsonplaceholder.typicode.com/users/${Number}`
    );
    const { data: post } = await axios(
        `https://jsonplaceholder.typicode.com/posts?id=${Number}`
    );

    console.log("user :", user);
    console.log("Post :", post);

};

export default getData;