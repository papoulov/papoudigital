
import React from 'react';
import { usePapouDigitalContext } from '../context/usePapouDigitalContext';

const SearchProp: React.FC = () => {
    const { setIsSearch } = usePapouDigitalContext();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget;
        form.reset()
        setIsSearch(pre => !pre)
    }
    return (
        <div className="search-popup">
            <div className="color-layer"></div>
            <button className="close-search" onClick={() => setIsSearch(pre => !pre)}><span className="far fa-times fa-fw"></span></button>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="search" name="search-field" placeholder="Search Here" required />
                    <button type="submit"><i className="fas fa-search"></i></button>
                </div>
            </form>
        </div>
    );
};

export default SearchProp;