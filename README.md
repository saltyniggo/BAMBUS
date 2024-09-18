# Bitte nicht vergessen :(
```
public partial class InitialCreate : Migration
{
    protected override void Up(MigrationBuilder migrationBuilder)
    {
        // Create the sequence
        migrationBuilder.Sql("CREATE SEQUENCE dbo.GlobalIdSequence AS INT START WITH 1 INCREMENT BY 1");
 
        // Other migration code...
    }
 
    protected override void Down(MigrationBuilder migrationBuilder)
    {
        // Drop the sequence
        migrationBuilder.Sql("DROP SEQUENCE dbo.GlobalIdSequence");
 
        // Other rollback code...
    }
}
```
