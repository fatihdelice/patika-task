const { ApolloServer, gql } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const { events, locations, users, participants } = require("./data");
const { nanoid } = require("nanoid");

const typeDefs = gql`
    # Event
    type Event{
        id: ID!
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
        location_id: ID!
        user_id: ID!
        user: User!
        location: Location!
        participants: [Participant!]!
    }
    
    input CreateEventInput{
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
    }

    input UpdateEventInput{
        title: String!
        desc: String!
        date: String!
        from: String!
        to: String!
    }

    # Location
    type Location{
        id: ID!
        name: String!
        desc: String!
        lat: Float!
        lng: Float!
    }

    
    input CreateLocationInput{
        name: String!
        desc: String!
        lat: Float!
        lng: Float!
    }

    input UpdateLocationInput{
        name: String!
        desc: String!
        lat: Float!
        lng: Float!
    }

    # User
    type User{
        id: ID!
        username: String!
        email: String!
        event: [Event!]!
    }

    
    input CreateUserInput{
        username: String!
        email: String!
    }

    input UpdateUserInput{
        username: String!
        email: String!
    }

    # Participant
    type Participant{
        id: ID!
        user_id: ID!
        event_id: ID!
        user: User!
    }

    
    input CreateParticipantInput{
        user_id: ID!
        event_id: ID!
    }

    input UpdateParticipantInput{
        user_id: ID!
        event_id: ID!
    }


    type DeleteAllOutput{
        count: Int!
    }

    type Query{
        events: [Event!]!
        event(id: ID!): Event!

        locations: [Location!]!
        location(id: ID!): Location!

        users: [User!]!
        user(id: ID!): User!

        participants: [Participant!]!
        participant(id: ID!): Participant!
    }

    type Mutation{
        # Event
        createEvent(data: CreateEventInput!): Event!
        updateEvent(id: ID!, data: UpdateEventInput!): Event!
        deleteEvent(id: ID!): Event!
        deletAllEvent: DeleteAllOutput!

        # Location
        createLocation(data: CreateLocationInput!): Location!
        updateLocation(id: ID!, data: UpdateLocationInput!): Location!
        deleteLocation(id: ID!): Location!
        deletAllLocations: DeleteAllOutput!

        # User
        createUser(data: CreateUserInput): User!
        updateUser(id: ID!, data: UpdateUserInput): User!
        deleteUser(id: ID!): User!
        deletAllUsers: DeleteAllOutput!

        # Participant
        createParticipant(data: CreateParticipantInput): Participant!
        updateParticipant(id: ID!, data: UpdateParticipantInput): Participant!
        deleteParticipant(id: ID!): Participant!
        deletAllParticipants: DeleteAllOutput!
    }
`;


const resolvers = {

    Mutation: {
        // User
        createUser: (parent, { data }) => {
            const user = {
                id: nanoid(),
                ...data,
            };
            users.push(user);
            return user;
        },
        updateUser: (parent, { id, data }) => {
            const user_index = users.find((user) => user.id === id);
            if (!user_index) {
                throw new Error("User not found!");
            }

            const updated_user = (users[user_index] = {
                ...users[user_index],
                ...data,
            });
            return updated_user;
        },
        deleteUser: (parent, { id }) => {
            const user_index = users.findIndex((user) => user.id === id);
            if (!user_index) {
                throw new Error("User not found!");
            }
            const deleted_user = users[user_index];
            users.splice(user_index, 1);
            return deleted_user;

        },
        deletAllUsers: () => {
            const length = users.length;
            users.splice(0, length);
            return {
                count: length,
            };
        },

        // Event
        createEvent: (parent, { data }) => {
            const event = {
                id: nanoid(),
                ...data
            };
            events.push(event);
            return event;
        },
        updateEvent: (parent, { id, data }) => {
            const event_index = events.find((event) => event.id === id);
            if (!event_index) {
                throw new Error("Event not found!");
            }

            const updated_event = (events[event_index] = {
                ...events[event_index],
                ...data,
            });
            return updated_event;
        },
        deleteEvent: (parent, { id }) => {
            const event_index = events.findIndex((event) => event.id === id);
            if (!event_index) {
                throw new Error("Event not found!");
            }
            const deleted_event = events[event_index];
            events.splice(event_index, 1);
            return deleted_event;

        },
        deletAllEvents: () => {
            const length = events.length;
            events.splice(0, length);
            return {
                count: length,
            };
        },

        // Location
        createLocation: (parent, { data }) => {
            const location = {
                id: nanoid(),
                ...data,
            };
            locations.push(location);
            return location;
        },
        updateLocation: (parent, { id, data }) => {
            const location_index = locations.find((location) => location.id === id);
            if (!location_index) {
                throw new Error("Locatin not found!");
            }

            const updated_location = (locations[location_index] = {
                ...locations[location_index],
                ...data,
            });
            return updated_location;
        },
        deleteLocation: (parent, { id }) => {
            const location_index = locations.findIndex((location) => location.id === id);
            if (!location_index) {
                throw new Error("Location not found!");
            }
            const deleted_location = locations[location_index];
            locations.splice(location_index, 1);
            return deleted_location;
        },
        deletAllLocations: () => {
            const length = locations.length;
            locations.splice(0, length);
            return {
                count: length,
            };
        },

        // Participant
        createParticipant: (parent, { data }) => {
            const participant = {
                id: nanoid(),
                ...data,
            };
            participants.push(participant);
            return participant;
        },
        updateParticipant: (parent, { id, data }) => {
            const participant_index = participants.find((participant) => participant.id === id);
            if (!participant_index) {
                throw new Error("Comment not found!");
            }

            const updated_participant = (participants[participant_index] = {
                ...participants[participant_index],
                ...data,
            });
            return updated_participant;
        },
        deleteParticipant: (parent, { id }) => {
            const participant_index = participants.findIndex((participant) => participant.id === id);
            if (!participant_index) {
                throw new Error("Comment not found!");
            }
            const deleted_participant = participants[participant_index];
            participants.splice(participant_index, 1);
            return deleted_participant;
        },
        deletAllParticipants: () => {
            const length = participants.length;
            participants.splice(0, length);
            return {
                count: length,
            };
        }
    }
    Query: {
        //events
        events: () => users,
        event: (parent, args) => events.find((event) => event.id === args.id),

        //locations
        locations: () => locations,
        location: (parent, args) => locations.find((location) => location.id === args.id),

        //users
        users: () => users,
        user: (parent, args) => users.find((user) => user.id === args.id),


        //participants
        participants: () => participants,
        participant: (parent, args) => participants.find((participant) => participant.id === args.id),
    },
    User: {
        event: (parent) => events.filter((event) => event.user_id === parent.id),
    },
    Event: {
        user: (parent) => users.find((user) => user.id === parent.user_id),
        location: (parent) => locations.find((location) => location.id === parent.location_id),
        participants: (parent) => participants.filter((participant) => participant.event_id === parent.id),
    },
    Participant: {
        user: (parent) => users.find((user) => user.id === parent.user_id),
    },
};



const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground({
            // options
        })
    ],
});

server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at: ${url}`);
});
