using System.Windows;

namespace RecipeNest
{
    public partial class App : Application
    {
        protected override void OnStartup(StartupEventArgs e)
        {
            base.OnStartup(e);

            // Set LoginPage as the startup window
            LoginPage loginPage = new LoginPage();
            loginPage.Show();
        }
    }
}