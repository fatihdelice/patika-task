import React from 'react'
import PropTypes from 'prop-types';

export default function User({ name, surname, isLoggedIn, age, friends, address }) {
    return (
        <>
            <h1>
                {
                    isLoggedIn ? `Welcome, ${name} ${surname} (${age})` : 'Giriş Yapılmadı'
                }
            </h1>

            {
                friends.map((friend) => (
                    <div key={friend.id}>
                        {friend.id} - {friend.name}
                    </div>
                ))
            }

            {address.title}{address.zip}

            {/* {
                friends.map((friend) => {
                    return (
                        <div key={friend.id}>
                            {friend.id} - {friend.name}
                        </div>
                    )
                })
            } */}
        </>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
    surname: PropTypes.string,
    isLoggedIn: PropTypes.bool,
    age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    }),
};

User.defaultProps = {
    name: "İsimsiz",
    isLoggedIn: false,
}

// export default function User(props) {
//   return (
//     <h1>
//         {
//             props.isLoggedIn ? `Welcome, ${props.name} ${props.surname}` :  'Giriş Yapılmadı'
//         }
//     </h1>
//   )
// }
