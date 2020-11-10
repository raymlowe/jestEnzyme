import { types } from './../../actions/types';
import postsReducer from './reducer';

describe('Post Reducer', () => {

    it('Should return default state', () =>{
        //first item is a array, second item is an object
        const newState = postsReducer(undefined, {});   //pass it a undefined array and empty, we test that the type does not match
        expect(newState).toEqual([]);
    });

    it ('Should return new state if receiving type', () =>{
        const post = [{title: 'test1'},{title: 'test2'},{title: 'test3'}];
        const newState = postsReducer(undefined, {
            type: types.GET_POSTS,
            payload: post
        });
        expect(newState).toEqual(post);

    });
});