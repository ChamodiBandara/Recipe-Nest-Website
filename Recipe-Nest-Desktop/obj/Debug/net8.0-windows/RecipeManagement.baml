   M S B A M L   `   `   `  ����  Recipe-Nest-Desktop!    RecipeNest.RecipeManagement   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	     � Title$  Recipe Management��5   	   $	��450��5   	   $	��800��5   	    � WindowStartupLocation$ CenterScreen=�5   	    � 
ResizeMode$ NoResize=�5   	   ���	#FF1E1E1E.��5      �� $��20q�6   .+�5   
   �� $��Recipe Management��6   $��24(�5      $
��Bold"�5      
�������$��0,0,0,20q�5      $��Center=�5      �� 5   
   -   5         ��Name$ 
lstRecipes��5      
�������
�������$	��250��5      $��0,0,0,20q�5       �� View 5      �� 5      .P�5      �� $��Item ID��6%    �� Width$	 100��6^    �� DisplayMemberBinding 66   �� *ItemID+6^   �� 5       $��	Item Name��6%   $	 200��6b    68   �� *
ItemName+6b   �� 5"      $
��Date��6%   $	 150��6Y    63   �� *Date+6Y   �� 5$      $��Category��6%   $	 150��6e    67   �� *ItemCategory+6e   5%      5'      �� 5*   
    �� Orientation$ 
Horizontal=�6   $��Center=�6.   .+�5+      �� -   5        $��
Add Recipe��5+      $��16(�5,      $��10q�5-      ���	#FF4CAF50
�������
������ $��0,0,10,0q�52      $	��120��53      �� 54      -   5        $��Delete Recipe��54      $��16(�55      $��10q�56      ���	#FFF44336
�������
������ $��0,0,10,0q�5;      $	��120��5<      �� 5=      -   5        $��Refresh��5=      $��16(�5>      $��10q�5?      ���	#FF2196F3
�������
������ $	��120��5D      5E      5F      5G      