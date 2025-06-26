import React from 'react'

const Search = () => {
  return (
    <div>
        <form method="GET" action="/search">
		<label for="search-term">Search:</label>
		<input type="text" id="search-term" name="q" placeholder="Search through Users, Albums, Tags, Pictures..."/>
		<select name="category">
			<option value="pictures">Pictures</option>
			<option value="albums">Albums</option>
			<option value="users">Users</option>
			<option value="tags">Tags</option>
			<option value="all" selected>All</option>
		</select>
		<button type="submit">Search</button>
	</form>        
    </div>
  )
}

export default Search