using System;
using System.Windows;

namespace RecipeNest
{
    public partial class LoginPage : Window
    {
       
        private readonly DatabaseHelper dbHelper = new DatabaseHelper("localhost", " recipenest-desktop", "root", "Cdbssb@123");

        public LoginPage()
        {
            InitializeComponent();
        }

        private void btnLogin_Click(object sender, RoutedEventArgs e)
        {
            string username = txtUsername.Text;
            string password = txtPassword.Password;

            // Authenticate user from the database
            var user = dbHelper.GetUserByUsername(username);

            if (user != null && user.Password == password)
            {
                MessageBox.Show("Login Successful!", "Success", MessageBoxButton.OK, MessageBoxImage.Information);

                // Redirect to Home Page
                HomePage homePage = new HomePage();
                Application.Current.MainWindow = homePage; // Set HomePage as the main window
                homePage.Show();
                this.Close(); // Close the LoginPage
            }
            else
            {
                MessageBox.Show("Invalid username or password.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
            }
        }

        private void btnSignup_Click(object sender, RoutedEventArgs e)
        {
            SignupPage signup = new();
            signup.Show();
            this.Close();
        }
    }
}