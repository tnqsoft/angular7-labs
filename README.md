# Angular 7 Laboratory

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Commands
```
ng generate m demo-module
ng generate c demo-component
```

## References
- https://www.typescriptlang.org/
- https://angular.io/
- https://cli.angular.io/

## .htaccess for dist folder
```
Options -Indexes +FollowSymLinks -Multiviews
IndexIgnore */*
RewriteBase /
RewriteEngine on
# Don't rewrite files or directories
RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]
# Rewrite everything else to index.html
# to allow html5 state links
RewriteRule ^ index.html [L]
```

## Apache config for Angular App
```
<VirtualHost *:80>
	Define server_admin your@domain.com
  Define server_name your-domain.com
  Define basedocroot  /data/www/angular7-labs
  Define docrootweb   ${basedocroot}/dist
  # For CENTOS or Xampp on windows apache config
  Define logdir   logs/
  # For Ubuntu apache config
  # Define logdir   ${APACHE_LOG_DIR}/
	
	ServerAdmin ${server_admin}
  ServerName ${server_name}
  DocumentRoot ${docrootweb}
  ErrorLog ${logdir}/angular7-labs-error.log
  CustomLog ${logdir}/angular7-labs-access.log Combined

  <Directory ${docrootweb}>
      AllowOverride All
      Require all granted
  </Directory>

  <Directory ${docrootweb}>
      DirectoryIndex ${docrootweb}/index.html
      <IfModule mod_negotiation.c>
          Options -MultiViews
      </IfModule>

      <IfModule mod_rewrite.c>
          RewriteEngine on
          # Don't rewrite files or directories
          RewriteCond %{REQUEST_FILENAME} -f [OR]
          RewriteCond %{REQUEST_FILENAME} -d
          RewriteRule ^ - [L]
          # Rewrite everything else to index.html
          # to allow html5 state links
          RewriteRule ^ index.html [L]
      </IfModule>

      <IfModule !mod_rewrite.c>
          <IfModule mod_alias.c>
              RedirectMatch 302 ^/$ /index.html/
          </IfModule>
      </IfModule>
  </Directory>
	
	Undefine server_admin
  Undefine server_name
  Undefine basedocroot
  Undefine docrootweb
  Undefine logdir
</VirtualHost>
```

## NGINX config for Angular App
```
# sudo vi /etc/nginx/conf.d/angular7-labs.conf
server {
    listen       80;
    server_name your-domain.com;

    autoindex off;

    location / {
        root /data/www/angular7-labs/dist;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }

    location ~ /\.ht {
        deny all;
    }

    error_log /var/log/nginx/angular7-labs-error.log;
    access_log /var/log/nginx/angular7-labs-access.log;
}
```
