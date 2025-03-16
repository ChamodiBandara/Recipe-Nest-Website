using System;
using System.Windows;
using System.Windows.Controls;

namespace RecipeNest
{
    public partial class AddEditRecipeDialog : Window
    {
        public Recipe Recipe { get; private set; }

        public AddEditRecipeDialog()
        {
            InitializeComponent(); // Ensure this is called
            Recipe = new Recipe(); // Initialize a new Recipe object

            // Set initial placeholder text
            txtItemID.Text = (string)txtItemID.Tag;
            txtItemName.Text = (string)txtItemName.Tag;
            txtDate.Text = (string)txtDate.Tag;
            txtItemCategory.Text = (string)txtItemCategory.Tag;
        }

        private void btnSave_Click(object sender, RoutedEventArgs e)
        {
            // Validate input fields
            if (string.IsNullOrWhiteSpace(txtItemID.Text) || txtItemID.Text == (string)txtItemID.Tag ||
                string.IsNullOrWhiteSpace(txtItemName.Text) || txtItemName.Text == (string)txtItemName.Tag ||
                string.IsNullOrWhiteSpace(txtDate.Text) || txtDate.Text == (string)txtDate.Tag ||
                string.IsNullOrWhiteSpace(txtItemCategory.Text) || txtItemCategory.Text == (string)txtItemCategory.Tag)
            {
                MessageBox.Show("Please fill in all fields.", "Error", MessageBoxButton.OK, MessageBoxImage.Error);
                return;
            }

            // Set the Recipe object properties
            Recipe.ItemID = txtItemID.Text;
            Recipe.ItemName = txtItemName.Text;
            Recipe.Date = txtDate.Text;
            Recipe.ItemCategory = txtItemCategory.Text;

            DialogResult = true; // Close the dialog and return true
        }

        private void TextBox_GotFocus(object sender, RoutedEventArgs e)
        {
            TextBox textBox = sender as TextBox;
            if (textBox != null && textBox.Text == (string)textBox.Tag)
            {
                textBox.Text = "";
                textBox.Foreground = System.Windows.Media.Brushes.Black;
            }
        }

        private void TextBox_LostFocus(object sender, RoutedEventArgs e)
        {
            TextBox textBox = sender as TextBox;
            if (textBox != null && string.IsNullOrWhiteSpace(textBox.Text))
            {
                textBox.Text = (string)textBox.Tag;
                textBox.Foreground = System.Windows.Media.Brushes.Gray;
            }
        }
    }
}