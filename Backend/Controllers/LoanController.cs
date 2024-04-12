namespace Backend.Controllers
{
	public class LoanController
	{
		[HttpGet("GetActiveLoansFromUserId")]
		public async Task<IActionResult> GetActiveLoansFromUserId()
		{
			return Ok("hier tolle aktive loans");
		}

		[HttpGet("GetPastLoansFromUserId")]
		public async Task<IActionResult> GetPastLoansFromUserId()
		{
			return Ok("hier tolle abgeschlossene loans");
		}

		[HttpGet("GetAllLoansFromUserId")]
		public async Task<IActionResult> GetAllLoansFromUserId()
		{
			return Ok("hier alle loans von nem User");
		}

		[HttpGet("GetAllLoans")]
		public async Task<IActionResult> GetAllLoans()
		{
			return Ok("hier alle loans");
		}

		[HttpGet("GetLoanById")]
		public async Task<IActionResult> GetLoanById()
		{
			return Ok("hier ein loan");
		}

		[HttpPost("CreateLoan")]
		public async Task<IActionResult> CreateLoan()
		{
			return Ok("hier wird ein loan erstellt");
		}

		[HttpPut("SetReturnDate")]
		public async Task<IActionResult> SetReturnDate()
		{
			return Ok("hier wird das Rückgabedatum gesetzt");
		}

		[HttpPut("EndExtensionRequest")]
		public async Task<IActionResult> EndExtensionRequest()
		{
			return Ok("hier wird die Verlängerungsanfrage beendet");
		}

		[HttpPut("UpdateDueDate")]
		public async Task<IActionResult> UpdateDueDate()
		{
			return Ok("hier wird das Rückgabedatum geupdatet");
		}


	}
}
