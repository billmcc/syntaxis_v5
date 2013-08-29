
guidedModel =// @startlock
{
	Admin :
	{
		fullName :
		{
			onGet:function()
			{// @endlock
				return this.firstName + " " + this.lastName;
			}// @startlock
		}
	}
};// @endlock
