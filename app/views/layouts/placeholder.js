class="tan-bg-fill">

<% if signed_in? %>
  <%= current_user.email %>
</br>
  <%= link_to "Sign Out", session_url, method: :delete %>
<% else %>
  <%= link_to "Sign In", new_session_url %>
  <%= link_to "Sign Up", new_user_url %>
<% end %>

<br>
<div class="errors">
  <% if flash[:errors] %>
    <% flash[:errors].each do |el| %>
    <% el.sub!("Fname ", '') %>
    <% el.sub!("Lname ", '') %>
    <% end %>
    <%= flash[:errors].uniq.join("<br>").html_safe if flash[:errors] %>
  <% end %>
</div>
<br>
