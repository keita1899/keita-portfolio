#!/bin/bash
set -e

echo "Start entrypoint.prod.sh"

echo "rm -f /myapp/tmp/pids/server.pid"
rm -f /myapp/tmp/pids/server.pid

if ! bundle exec rails db:version RAILS_ENV=production; then
  bundle exec rails db:create RAILS_ENV=production

  echo "bundle exec rails db:seed RAILS_ENV=production"
  bundle exec rails db:seed RAILS_ENV=production
fi

echo "bundle exec rails db:migrate RAILS_ENV=production"
bundle exec rails db:migrate RAILS_ENV=production

bundle exec rails s -b '0.0.0.0' -p 3000