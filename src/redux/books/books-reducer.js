const initialState = {
    books: [
        { title: 'PHP IS THE BEST!' },
        { title: 'JAVASCRIPT IS THE BEST!!' },
        { title: 'C# MAYBE' },
        { title: 'NODE BOOOOOI' }
    ],
    selectedBook: ''
};

export default function(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}
