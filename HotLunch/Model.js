
guidedModel =// @startlock
{
	MenuItem :
	{
		cost :
		{
			onGet:function()
			{// @endlock
				return this.price * this.quantity;
			}// @startlock
		}
	},
	Person :
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
