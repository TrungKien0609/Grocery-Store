<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOrderItemDetailProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('order_item_detail_products', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->string('product_name');
            $table->integer('quantity');
            $table->integer('item_price');
            $table->integer('total');
            $table->unsignedInteger('order_item_id');
            $table->foreign('order_item_id')->references('id')->on('order_items')->onDelete('cascade')->onUpdate('cascade');;
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('order_item_detail_products');
    }
}
