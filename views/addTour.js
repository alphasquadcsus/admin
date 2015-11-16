extends layout
block content
	form(method="post",action="/addTour")
		input#tourName(type="text",placeholder="Tour Name",name="tourName")
		| Add Sites
		select
			each site in allSites
				option(value=site.name)#{site.name}
		input(type="submit",value="Submit")